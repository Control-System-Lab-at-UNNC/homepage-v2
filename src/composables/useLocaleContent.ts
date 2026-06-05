// Locale-aware content query composable.
//
// Provides helpers that query Nuxt Content with the current locale
// and fall back to English when the localized document is not found.

export function useLocaleContent() {
  const { locale } = useI18n()

  /**
   * Query a single content document, preferring the current locale.
   * Falls back to English if the locale version doesn't exist.
   */
  async function findLocaleOne(path: string) {
    // Try current locale first
    const localeResult = await queryContent(path)
      .where({ _extension: 'md', locale: locale.value })
      .findOne()

    if (localeResult && localeResult._path) {
      return localeResult
    }

    // Fallback to English
    if (locale.value !== 'en') {
      const enResult = await queryContent(path)
        .where({ _extension: 'md', locale: 'en' })
        .findOne()
      if (enResult && enResult._path) {
        return enResult
      }
    }

    // Last resort: try without locale filter (for content without locale field)
    return await queryContent(path)
      .where({ _extension: 'md' })
      .findOne()
  }

  /**
   * Query multiple content documents, preferring the current locale.
   * For each document, returns the locale version if available, else English.
   */
  async function findLocaleMany(path: string) {
    // Get all documents under the path
    const all = await queryContent(path)
      .where({ _extension: 'md', _hidden: { $ne: true } })
      .find()

    // Group by _path (which has been normalized to strip locale suffix)
    const byPath = new Map<string, any[]>()
    for (const doc of all) {
      const p = doc._path || ''
      if (!byPath.has(p)) {
        byPath.set(p, [])
      }
      byPath.get(p)!.push(doc)
    }

    // Pick best locale for each path
    const results: any[] = []
    for (const [, docs] of byPath) {
      const localeDoc = docs.find((d: any) => d.locale === locale.value)
      const enDoc = docs.find((d: any) => d.locale === 'en')
      results.push(localeDoc || enDoc || docs[0])
    }

    return results
  }

  return { findLocaleOne, findLocaleMany }
}
