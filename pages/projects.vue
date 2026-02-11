<template>
  <div class="projects-page">
    <div class="section">
      <div class="container">
        <SectionTitle
          overline="Research"
          title="Our Projects"
          description="Explore our ongoing and completed research projects in control systems and robotics."
        />

        <div class="projects-content" v-if="projects.length > 0">
          <div class="project-card" v-for="project in projects" :key="project._path">
            <h3 class="project-card__title">{{ project.title }}</h3>
            <p class="project-card__description" v-if="project.description">
              {{ project.description }}
            </p>
            <div class="project-card__meta" v-if="project.status || project.year">
              <span v-if="project.status" class="badge">{{ project.status }}</span>
              <span v-if="project.year" class="project-card__year">{{ project.year }}</span>
            </div>
          </div>
        </div>

        <div class="projects-placeholder" v-else>
          <div class="placeholder-icon">🔬</div>
          <h3>Projects Coming Soon</h3>
          <p>We are currently updating our project portfolio. Please check back later or explore our publications to learn about our research.</p>
          <NuxtLink to="/publications" class="btn btn-secondary">View Publications</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts>
interface Project {
  title: string
  description?: string
  status?: string
  year?: number
  _path: string
}

// Fetch projects
const { data: projects } = await useAsyncData('projects', () =>
  queryContent('/projects').find()
)

useHead({
  title: 'Projects - Control System Lab UNNC',
  meta: [
    { name: 'description', content: 'Our research projects in control systems and robotics.' }
  ]
})
</script>

<style scoped>
.projects-page {
  padding-top: var(--spacing-xl);
}

.projects-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.project-card {
  background: var(--color-bg-alt);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.project-card:hover {
  border-color: var(--color-secondary);
  box-shadow: var(--shadow-lg);
}

.project-card__title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.project-card__description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-md);
}

.project-card__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.project-card__year {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

/* Placeholder */
.projects-placeholder {
  text-align: center;
  padding: var(--spacing-4xl) var(--spacing-lg);
  background: var(--color-bg-alt);
  border-radius: var(--radius-2xl);
  border: 1px dashed var(--color-border);
}

.placeholder-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-lg);
}

.projects-placeholder h3 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.projects-placeholder p {
  font-size: 1.0625rem;
  color: var(--color-text-muted);
  max-width: 500px;
  margin: 0 auto var(--spacing-xl);
}
</style>
