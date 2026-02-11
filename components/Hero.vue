<template>
  <section class="hero">
    <div class="hero__grid">
      <div class="hero__content">
        <span class="hero__badge">{{ badge }}</span>
        <h1 class="hero__title">{{ title }}</h1>
        <p class="hero__description">{{ description }}</p>
        <div class="hero__actions">
          <NuxtLink to="/members" class="btn btn-primary">
            Meet Our Team
          </NuxtLink>
          <NuxtLink to="/publications" class="btn btn-secondary">
            View Research
          </NuxtLink>
        </div>
      </div>
      <div class="hero__visual">
        <div class="hero__pattern"></div>
        <div class="hero__shapes">
          <span class="hero__shape hero__shape--1"></span>
          <span class="hero__shape hero__shape--2"></span>
          <span class="hero__shape hero__shape--3"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  badge?: string
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  badge: 'Control System Lab',
  title: 'Advancing Control Systems & Robotics Research',
  description: 'Welcome to the Control System Lab at the University of Nottingham Ningbo China. We conduct cutting-edge research in control systems, robotics, and aerospace engineering.'
})
</script>

<style scoped>
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding-top: 70px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  opacity: 0.03;
  z-index: -1;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.hero__content {
  animation: fadeInUp 0.8s ease forwards;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
  background: rgba(0, 217, 255, 0.1);
  border-radius: var(--radius-full);
  margin-bottom: var(--spacing-lg);
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.hero__title span {
  color: var(--color-secondary);
}

.hero__description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-xl);
  max-width: 540px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

/* Visual */
.hero__visual {
  position: relative;
  height: 500px;
  animation: fadeIn 1s ease 0.3s forwards;
  opacity: 0;
}

.hero__pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(10, 37, 64, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(10, 37, 64, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  border-radius: var(--radius-2xl);
}

.hero__shapes {
  position: absolute;
  inset: 0;
}

.hero__shape {
  position: absolute;
  border-radius: var(--radius-lg);
  animation: float 6s ease-in-out infinite;
}

.hero__shape--1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 10%;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%);
  opacity: 0.2;
  animation-delay: 0s;
}

.hero__shape--2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 5%;
  background: var(--color-primary);
  opacity: 0.15;
  animation-delay: 1s;
}

.hero__shape--3 {
  width: 100px;
  height: 100px;
  top: 50%;
  right: 25%;
  background: var(--color-secondary);
  opacity: 0.25;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

/* Responsive */
@media (max-width: 968px) {
  .hero {
    min-height: auto;
    padding-top: var(--spacing-2xl);
    padding-bottom: var(--spacing-2xl);
  }

  .hero__grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .hero__visual {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .hero__actions {
    flex-direction: column;
  }

  .hero__actions .btn {
    width: 100%;
  }
}
</style>
