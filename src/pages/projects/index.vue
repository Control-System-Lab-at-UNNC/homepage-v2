<template>
  <div class="projects-page">
    <div class="section">
      <div class="container">
        <SectionTitle
          overline="Research"
          title="Projects"
          description="Explore our ongoing and completed research projects in control systems and robotics."
        />

        <!-- Projects Grid -->
        <div class="projects-grid" v-if="projectList.length > 0">
          <NuxtLink
            v-for="project in projectList"
            :key="project._path"
            :to="project._path || ''"
            class="project-card"
          >
            <div class="project-card__image-wrapper" v-if="project.image">
              <img :src="project.image" :alt="project.title" class="project-card__image" />
            </div>
            <div class="project-card__content">
              <h3 class="project-card__title">{{ project.title }}</h3>
              <p class="project-card__description" v-if="project.description">
                {{ project.description }}
              </p>
              <div class="project-card__meta" v-if="project.status || project.year">
                <span v-if="project.status" class="badge" :class="`badge-${project.status}`">
                  {{ project.status }}
                </span>
                <span v-if="project.year" class="project-card__year">{{ project.year }}</span>
              </div>
            </div>
          </NuxtLink>
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

<script setup lang="ts">
interface Project {
  title: string
  description?: string
  status?: string
  year?: number
  image?: string
  _path?: string
}

// Fetch projects
const { data: projects } = await useAsyncData('projects', () =>
  queryContent('/projects').find()
)

const projectList = computed(() => projects.value ?? [])

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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-xl);
}

.project-card {
  background: var(--color-bg-alt);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
  text-decoration: none;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: var(--color-secondary);
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
}

.project-card__image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-card__image {
  transform: scale(1.05);
}

.project-card__content {
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-card__title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
  line-height: 1.3;
}

.project-card__description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-md);
  flex: 1;
}

.project-card__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-top: auto;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: var(--radius-sm);
}

.badge-ongoing {
  background: var(--color-accent);
  color: white;
}

.badge-completed {
  background: var(--color-secondary);
  color: white;
}

.project-card__year {
  font-size: 0.8125rem;
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

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
