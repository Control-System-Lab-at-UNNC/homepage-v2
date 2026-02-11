<template>
  <article class="member-card">
    <div class="member-card__image-wrapper">
      <img
        :src="member.image || '/images/people/default.webp'"
        :alt="member.name"
        class="member-card__image"
        loading="lazy"
      />
      <div class="member-card__overlay">
        <a
          v-if="member.email"
          :href="`mailto:${member.email}`"
          class="member-card__action"
          aria-label="Send email"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 5L10 10L17.5 5M2.5 5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H15C15.663 2.5 16.2989 2.76339 16.7678 3.23223C17.2366 3.70107 17.5 4.33696 17.5 5M2.5 5V15C2.5 15.663 2.76339 16.2989 3.23223 16.7678C3.70107 17.2366 4.33696 17.5 5 17.5H15C15.663 17.5 16.2989 17.2366 16.7678 16.7678C17.2366 16.2989 17.5 15.663 17.5 15V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a
          v-if="member.scholar"
          :href="member.scholar"
          target="_blank"
          rel="noopener"
          class="member-card__action"
          aria-label="Google Scholar"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2C8.5 2 7.2 2.4 6.1 3.2L10 8.5V2ZM10 2C11.5 2 12.8 2.4 13.9 3.2L10 8.5V2ZM10 10L5.5 4.7C4.3 5.8 3.5 7.3 3.5 9C3.5 11.8 5.6 14.2 8.3 14.8V18H11.7V14.8C14.4 14.2 16.5 11.8 16.5 9C16.5 7.3 15.7 5.8 14.5 4.7L10 10Z"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="member-card__content">
      <h3 class="member-card__name">{{ member.name }}</h3>
      <p class="member-card__role">{{ member.role || member.title }}</p>
      <p v-if="member.interests && member.interests.length" class="member-card__interests">
        {{ formattedInterests }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Member {
  name: string
  role?: string
  title?: string
  email?: string
  scholar?: string
  image?: string
  interests?: string[]
}

interface Props {
  member: Member
}

const props = defineProps<Props>()

const formattedInterests = computed(() => {
  if (!props.member.interests) return ''
  return props.member.interests.slice(0, 3).join(' · ')
})
</script>

<style scoped>
.member-card {
  background: var(--color-bg-alt);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.member-card:hover {
  transform: translateY(-8px) rotate(1deg);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-secondary);
}

.member-card__image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
}

.member-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform var(--transition-slow);
}

.member-card:hover .member-card__image {
  transform: scale(1.05);
}

.member-card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-md);
  background: linear-gradient(transparent, rgba(10, 37, 64, 0.9));
  display: flex;
  gap: var(--spacing-sm);
  opacity: 0;
  transform: translateY(100%);
  transition: all var(--transition-base);
}

.member-card:hover .member-card__overlay {
  opacity: 1;
  transform: translateY(0);
}

.member-card__action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: var(--radius-full);
  color: var(--color-primary);
  transition: all var(--transition-fast);
}

.member-card__action:hover {
  background: var(--color-accent);
  color: white;
  transform: scale(1.1);
}

.member-card__content {
  padding: var(--spacing-lg);
}

.member-card__name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
  line-height: 1.3;
}

.member-card__role {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-sm);
}

.member-card__interests {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}
</style>
