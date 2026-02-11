<template>
  <div class="news-page">
    <div class="section">
      <div class="container">
        <SectionTitle
          overline="News & Events"
          title="Latest Updates"
          description="Stay informed about our latest research breakthroughs, events, and announcements."
        />

        <div class="news-list" v-if="safeNewsItems.length > 0">
          <NewsCard
            v-for="item in safeNewsItems"
            :key="item._path"
            :news="item"
          />
        </div>

        <div class="news-empty" v-else>
          <div class="news-empty__icon">📰</div>
          <h3>No News Yet</h3>
          <p>Check back soon for the latest updates from our lab.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NewsItem {
  title: string
  date: string
  description?: string
  tags?: string[]
  _path: string
}

// Fetch all news
const { data: newsItems } = await useAsyncData('news', () =>
  queryContent('/news')
    .sort({ date: -1 })
    .find()
)

const safeNewsItems = computed(() =>
  (newsItems.value ?? []).filter((item: any) => typeof item.date === 'string') as unknown as NewsItem[]
)

useHead({
  title: 'News - Control System Lab UNNC',
  meta: [
    { name: 'description', content: 'Latest news and updates from the Control System Lab at UNNC.' }
  ]
})
</script>

<style scoped>
.news-page {
  padding-top: var(--spacing-xl);
}

.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-xl);
}

.news-empty {
  text-align: center;
  padding: var(--spacing-4xl) var(--spacing-lg);
  background: var(--color-bg-alt);
  border-radius: var(--radius-2xl);
  border: 1px dashed var(--color-border);
}

.news-empty__icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-lg);
}

.news-empty h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.news-empty p {
  font-size: 1.0625rem;
  color: var(--color-text-muted);
}

@media (max-width: 640px) {
  .news-list {
    grid-template-columns: 1fr;
  }
}
</style>
