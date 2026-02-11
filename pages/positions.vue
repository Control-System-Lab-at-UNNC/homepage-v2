<template>
  <div class="positions-page">
    <div class="section">
      <div class="container">
        <SectionTitle
          overline="Join Us"
          title="Open Positions"
          description="We are always looking for talented individuals to join our research team."
        />

        <div class="positions-intro">
          <p>
            The Control System Lab offers various opportunities for students and researchers to engage in cutting-edge research. We welcome applications from motivated individuals interested in control systems, robotics, and related fields.
          </p>
        </div>

        <!-- Position Categories -->
        <div class="positions-section" v-for="category in positionCategories" :key="category.title">
          <h3 class="positions-section__title">{{ category.title }}</h3>
          <p class="positions-section__description">{{ category.description }}</p>

          <div class="positions-list" v-if="category.positions.length > 0">
            <div class="position-card" v-for="position in category.positions" :key="position.title">
              <div class="position-card__header">
                <h4 class="position-card__title">{{ position.title }}</h4>
                <span v-if="position.type" class="badge badge-accent">{{ position.type }}</span>
              </div>
              <p class="position-card__description" v-if="position.description">
                {{ position.description }}
              </p>
              <div class="position-card__details" v-if="position.requirements">
                <strong>Requirements:</strong>
                <ul>
                  <li v-for="(req, index) in position.requirements" :key="index">{{ req }}</li>
                </ul>
              </div>
              <a
                v-if="position.email"
                :href="`mailto:${position.email}`"
                class="position-card__contact"
              >
                Apply Now →
              </a>
            </div>
          </div>

          <div class="positions-coming-soon" v-else>
            <p>No positions currently available in this category. Check back soon!</p>
          </div>
        </div>

        <!-- General Inquiry -->
        <div class="positions-contact">
          <h3>Interested in Joining Our Lab?</h3>
          <p>
            If you are interested in pursuing research opportunities with us, please contact our lab director with your CV and a brief statement of your research interests.
          </p>
          <a href="mailto:salman.ijaz@nottingham.edu.cn" class="btn btn-primary">
            Contact Dr Salman Ijaz
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Position {
  title: string
  description?: string
  type?: string
  requirements?: string[]
  email?: string
}

interface PositionCategory {
  title: string
  description: string
  positions: Position[]
}

// Position categories data
const positionCategories = ref<PositionCategory[]>([
  {
    title: 'Final Year Projects (FYP)',
    description: 'Final year undergraduate projects available for motivated students.',
    positions: [] // Add positions as content files
  },
  {
    title: 'Foong Undergraduate Research Prize (FURP)',
    description: 'Research opportunities for undergraduate students.',
    positions: [] // Add positions as content files
  },
  {
    title: 'Research Assistant Positions',
    description: 'Join our team as a research assistant to work on ongoing projects.',
    positions: [] // Add positions as content files
  }
])

// Fetch positions content
const { data: positionsContent } = await useAsyncData('positions', () =>
  queryContent('/positions').findOne()
)

// Merge content with default categories
if (positionsContent.value?.categories) {
  positionCategories.value = positionsContent.value.categories
}

useHead({
  title: 'Open Positions - Control System Lab UNNC',
  meta: [
    { name: 'description', content: 'Join our team - open positions for students and researchers at the Control System Lab.' }
  ]
})
</script>

<style scoped>
.positions-page {
  padding-top: var(--spacing-xl);
}

.positions-intro {
  background: var(--color-bg-alt);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
  border-left: 4px solid var(--color-secondary);
}

.positions-intro p {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--color-text-muted);
  margin: 0;
}

/* Position Sections */
.positions-section {
  margin-bottom: var(--spacing-3xl);
}

.positions-section__title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.positions-section__description {
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-lg);
}

.positions-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.position-card {
  background: var(--color-bg-alt);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border);
}

.position-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.position-card__title {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0;
}

.position-card__description {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.position-card__details {
  font-size: 0.875rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.position-card__details strong {
  display: block;
  margin-bottom: var(--spacing-xs);
}

.position-card__details ul {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.position-card__details li {
  margin-bottom: var(--spacing-xs);
}

.position-card__contact {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-secondary);
  text-decoration: none;
}

.position-card__contact:hover {
  text-decoration: underline;
}

.positions-coming-soon {
  padding: var(--spacing-xl);
  text-align: center;
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  border: 1px dashed var(--color-border);
}

.positions-coming-soon p {
  color: var(--color-text-muted);
  margin: 0;
}

/* Contact Section */
.positions-contact {
  text-align: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: white;
  border-radius: var(--radius-2xl);
  padding: var(--spacing-3xl) var(--spacing-xl);
  margin-top: var(--spacing-3xl);
}

.positions-contact h3 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  margin-bottom: var(--spacing-md);
}

.positions-contact p {
  font-size: 1.0625rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
}

.positions-contact .btn {
  background: white;
  color: var(--color-primary);
}

.positions-contact .btn:hover {
  background: var(--color-accent);
  color: white;
}
</style>
