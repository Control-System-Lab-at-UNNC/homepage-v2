<template>
  <div class="members-page">
    <div class="section">
      <div class="container">
        <SectionTitle
          overline="Our Team"
          title="Lab Members"
          description="Meet our diverse team of faculty, researchers, and students working together to advance the frontiers of control systems and robotics."
        />

        <!-- Category Filter -->
        <div class="members-filter" v-if="categories.length > 1">
          <button
            v-for="category in categories"
            :key="category.key"
            class="filter-btn"
            :class="{ 'filter-btn--active': activeCategory === category.key }"
            @click="activeCategory = category.key"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- Members Grid -->
        <MembersGrid
          v-if="filteredMembers.length > 0"
          :members="filteredMembers"
          :groupBy="false"
        />
        <p v-else class="no-results">No members found in this category.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Member {
  name: string
  slug: string
  role?: string
  title?: string
  email?: string
  scholar?: string
  image?: string
  interests?: string[]
  category?: string
  order?: number
  _path?: string
}

// Fetch all members
const { data: allMembers } = await useAsyncData('members', () =>
  queryContent('/members').find()
)

const processedMembers = computed(() => {
  return (allMembers.value || []).map(member => ({
    ...member,
    slug: member._path?.split('/').pop() || member.slug
  }))
})

// Category definitions
const categories = [
  { key: 'all', name: 'All Members' },
  { key: 'staff', name: 'Staff' },
  { key: 'research-students', name: 'Research Students' },
  { key: 'research-assistants', name: 'Research Assistants' },
  { key: 'alumni', name: 'Alumni' }
]

const activeCategory = ref('all')

const filteredMembers = computed(() => {
  if (activeCategory.value === 'all') {
    return processedMembers.value
  }
  return processedMembers.value.filter(m => m.category === activeCategory.value)
})

useHead({
  title: 'Members - Control System Lab UNNC',
  meta: [
    { name: 'description', content: 'Meet our team of researchers at the Control System Lab, University of Nottingham Ningbo China.' }
  ]
})
</script>

<style scoped>
.members-page {
  padding-top: var(--spacing-xl);
}

.members-filter {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-2xl);
}

.filter-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-muted);
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--color-secondary);
  color: var(--color-secondary);
}

.filter-btn--active {
  background: var(--color-secondary);
  border-color: var(--color-secondary);
  color: white;
}

.no-results {
  text-align: center;
  padding: var(--spacing-3xl);
  font-size: 1.125rem;
  color: var(--color-text-muted);
}
</style>
