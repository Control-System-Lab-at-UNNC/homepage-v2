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

        <!-- Positions Grid -->
        <div class="positions-grid" v-if="positionsList.length > 0">
          <NuxtLink
            v-for="position in positionsList"
            :key="position._path"
            :to="position._path || ''"
            class="position-card"
          >
            <div class="position-card__header">
              <h3 class="position-card__title">{{ position.title }}</h3>
              <span v-if="position.type" class="badge badge-accent">{{ position.type }}</span>
            </div>
            <p class="position-card__description" v-if="position.description">
              {{ position.description }}
            </p>
            <div class="position-card__footer">
              <span class="position-card__cta">View Details →</span>
            </div>
          </NuxtLink>
        </div>

        <div class="positions-coming-soon" v-else>
          <div class="placeholder-icon">💼</div>
          <h3>No Positions Currently Available</h3>
          <p>Check back soon for new opportunities to join our team!</p>
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
  _path?: string
}

// Fetch positions
const { data: positions } = await useAsyncData('positions', () =>
  queryContent('/positions').find()
)

const positionsList = computed(() => positions.value || [])

useHead({
  title: 'Open Positions - Control System Lab UNNC',
  meta: [
    { name: 'description', content: 'Join our team - open positions for students and researchers at Control System Lab.' }
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

.positions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
}

.position-card {
  background: var(--color-bg-alt);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
  text-decoration: none;
  display: flex;
  flex-direction: column;
}

.position-card:hover {
  border-color: var(--color-secondary);
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
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
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0;
  line-height: 1.3;
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
  flex-shrink: 0;
}

.badge-accent {
  background: var(--color-accent);
  color: white;
}

.position-card__description {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  flex: 1;
}

.position-card__footer {
  margin-top: auto;
}

.position-card__cta {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-secondary);
  transition: color var(--transition-fast);
}

.position-card:hover .position-card__cta {
  color: var(--color-accent);
}

/* Coming Soon */
.positions-coming-soon {
  text-align: center;
  padding: var(--spacing-4xl) var(--spacing-lg);
  background: var(--color-bg-alt);
  border-radius: var(--radius-2xl);
  border: 1px dashed var(--color-border);
  margin-bottom: var(--spacing-3xl);
}

.placeholder-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-lg);
}

.positions-coming-soon h3 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.positions-coming-soon p {
  font-size: 1.0625rem;
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

@media (max-width: 768px) {
  .positions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
