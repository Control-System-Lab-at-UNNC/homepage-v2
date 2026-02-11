<template>
  <article class="publication-card">
    <div class="publication-card__meta">
      <span class="publication-card__year">{{ publication.year }}</span>
      <span v-if="publication.venue" class="badge badge-accent">{{ publication.venue }}</span>
    </div>
    <h3 class="publication-card__title">
      <a :href="publication.doi" target="_blank" rel="noopener" v-if="publication.doi">
        {{ publication.title }}
      </a>
      <span v-else>{{ publication.title }}</span>
    </h3>
    <p class="publication-card__authors">{{ formattedAuthors }}</p>
    <p class="publication-card__abstract" v-if="publication.abstract">{{ truncatedAbstract }}</p>
    <div class="publication-card__footer">
      <div class="publication-card__keywords">
        <span
          v-for="(keyword, index) in displayedKeywords"
          :key="index"
          class="publication-card__keyword"
        >
          {{ keyword }}
        </span>
        <span v-if="moreKeywords" class="publication-card__keyword-more">+{{ moreKeywords }}</span>
      </div>
      <a
        v-if="publication.doi"
        :href="publication.doi"
        target="_blank"
        rel="noopener"
        class="publication-card__link"
        aria-label="View publication"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 16C14 13.7909 12.2091 12 10 12C7.79086 12 6 13.7909 6 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 17C10 17 15.5 17 15.5 10C15.5 3 10 3 10 3C10 3 4.5 3 4.5 10C4.5 17 10 17 10 17Z" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Publication {
  title: string
  authors: string[]
  year: number
  doi?: string
  venue?: string
  keywords?: string[]
  abstract?: string
}

interface Props {
  publication: Publication
}

const props = defineProps<Props>()

const formattedAuthors = computed(() => {
  // Format: Author1, Author2, Author3, and Author4
  const authors = props.publication.authors
  if (authors.length <= 2) return authors.join(' and ')
  return authors.slice(0, authors.length - 1).join(', ') + ', and ' + authors[authors.length - 1]
})

const truncatedAbstract = computed(() => {
  if (!props.publication.abstract) return ''
  const abstract = props.publication.abstract
  return abstract.length > 200 ? abstract.slice(0, 200) + '...' : abstract
})

const displayedKeywords = computed(() => {
  if (!props.publication.keywords) return []
  return props.publication.keywords.slice(0, 3)
})

const moreKeywords = computed(() => {
  if (!props.publication.keywords) return 0
  const remaining = props.publication.keywords.length - 3
  return remaining > 0 ? remaining : 0
})
</script>

<style scoped>
.publication-card {
  background: var(--color-bg-alt);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.publication-card:hover {
  border-color: var(--color-secondary);
  box-shadow: var(--shadow-lg);
}

.publication-card__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.publication-card__year {
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
}

.publication-card__title {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.publication-card__title a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.publication-card__title a:hover {
  color: var(--color-secondary);
}

.publication-card__authors {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-md);
}

.publication-card__abstract {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.publication-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
}

.publication-card__keywords {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.publication-card__keyword {
  font-size: 0.75rem;
  padding: 2px 8px;
  background: var(--color-bg);
  color: var(--color-text-muted);
  border-radius: var(--radius-sm);
}

.publication-card__keyword-more {
  font-size: 0.75rem;
  color: var(--color-secondary);
  font-weight: 500;
}

.publication-card__link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--color-bg);
  border-radius: var(--radius-full);
  color: var(--color-primary);
  flex-shrink: 0;
  transition: all var(--transition-fast);
}

.publication-card__link:hover {
  background: var(--color-secondary);
  color: white;
  transform: scale(1.1);
}
</style>
