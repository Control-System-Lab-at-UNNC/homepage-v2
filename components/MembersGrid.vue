<template>
  <section class="members-section" v-if="members.length > 0">
    <div v-for="(category, index) in categorizedMembers" :key="category.name" class="members-category">
      <h3 class="members-category__title">{{ category.name }}</h3>
      <div class="members-grid">
        <MemberCard
          v-for="member in category.members"
          :key="member.slug"
          :member="member"
        />
      </div>
    </div>
  </section>
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
}

interface Props {
  members: Member[]
  groupBy?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  groupBy: true
})

const categoryNames: Record<string, string> = {
  staff: 'Staff',
  'research-students': 'Research Students',
  'research-assistants': 'Research Assistants',
  alumni: 'Alumni'
}

const categorizedMembers = computed(() => {
  if (!props.groupBy) {
    return [{
      name: 'Members',
      members: props.members.sort((a, b) => (a.order || 0) - (b.order || 0))
    }]
  }

  const categories: Record<string, Member[]> = {}

  for (const member of props.members) {
    const cat = member.category || 'staff'
    if (!categories[cat]) {
      categories[cat] = []
    }
    categories[cat].push(member)
  }

  return Object.entries(categories)
    .map(([key, members]) => ({
      name: categoryNames[key] || key,
      members: members.sort((a, b) => (a.order || 0) - (b.order || 0))
    }))
    .filter(cat => cat.members.length > 0)
})
</script>

<style scoped>
.members-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
}

.members-category {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.members-category__title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-primary);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-border);
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--spacing-xl);
}

@media (max-width: 640px) {
  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--spacing-lg);
  }
}
</style>
