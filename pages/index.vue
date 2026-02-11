<template>
  <div class="home-page">
    <Hero />

    <!-- Latest News -->
    <section class="section" v-if="latestNews.length > 0">
      <div class="container">
        <SectionTitle
          title="Latest News"
          description="Stay updated with our latest announcements, events, and research updates."
          align="center"
        />
        <div class="news-grid">
          <NewsCard
            v-for="item in latestNews"
            :key="item._path"
            :news="item"
          />
        </div>
        <div class="section__actions" v-if="hasMoreNews">
          <NuxtLink to="/news" class="btn btn-secondary">
            View All News
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section section--alt">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <SectionTitle
              overline="About Us"
              title="Advancing Control Systems Research"
              description="We are a multidisciplinary research group at the University of Nottingham Ningbo China, focused on cutting-edge research in control systems, robotics, and aerospace engineering."
            />
            <p class="about-text">
              Our lab conducts fundamental and applied research in fault tolerant control, unmanned aerial vehicles, robotics, and advanced manufacturing. We collaborate with industry partners and leading research institutions worldwide to develop innovative solutions for complex control problems.
            </p>
            <div class="about-stats">
              <div class="stat">
                <span class="stat__value">6+</span>
                <span class="stat__label">Faculty Members</span>
              </div>
              <div class="stat">
                <span class="stat__value">10+</span>
                <span class="stat__label">Research Students</span>
              </div>
              <div class="stat">
                <span class="stat__value">20+</span>
                <span class="stat__label">Publications</span>
              </div>
            </div>
          </div>
          <div class="about-visual">
            <div class="about-shape about-shape--1"></div>
            <div class="about-shape about-shape--2"></div>
            <div class="about-shape about-shape--3"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Members -->
    <section class="section" v-if="featuredMembers.length > 0">
      <div class="container">
        <SectionTitle
          overline="Our Team"
          title="Meet Our Lab Members"
          description="A diverse team of researchers working together to advance the frontiers of control systems and robotics."
          align="center"
        />
        <MembersGrid :members="featuredMembers" :groupBy="false" />
        <div class="section__actions">
          <NuxtLink to="/members" class="btn btn-primary">
            View All Members
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Research Areas -->
    <section class="section section--alt">
      <div class="container">
        <SectionTitle
          overline="Research"
          title="Our Research Areas"
          align="center"
        />
        <div class="research-areas">
          <div class="research-card" v-for="(area, index) in researchAreas" :key="index">
            <span class="research-card__icon">{{ area.icon }}</span>
            <h3 class="research-card__title">{{ area.title }}</h3>
            <p class="research-card__description">{{ area.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Fetch latest news
const { data: allNews } = await useAsyncData('home-news', () =>
  queryContent('/news')
    .sort({ date: -1 })
    .limit(3)
    .find()
)

const latestNews = computed(() => allNews.value || [])
const hasMoreNews = computed(() => latestNews.value.length >= 3)

// Fetch featured members
const { data: allMembers } = await useAsyncData('home-members', () =>
  queryContent('/members')
    .where({ category: 'staff' })
    .limit(4)
    .find()
)

const featuredMembers = computed(() => {
  return (allMembers.value || []).map(member => ({
    ...member,
    slug: member._path?.split('/').pop() || member.slug,
    name: member.name || member.title || 'Unnamed Member'
  }))
})

// Research areas data
const researchAreas = [
  {
    icon: '🛩️',
    title: 'Aerospace Control',
    description: 'Fault tolerant control systems, unmanned aerial vehicles, and aircraft dynamics'
  },
  {
    icon: '🤖',
    title: 'Robotics',
    description: 'Field robots, walking robots, aerial manipulation, and human-robot interaction'
  },
  {
    icon: '🧠',
    title: 'Intelligent Control',
    description: 'Adaptive control, sliding mode control, and robust control systems'
  },
  {
    icon: '🏭',
    title: 'Advanced Manufacturing',
    description: 'Mechatronics, additive manufacturing, and intelligent machining systems'
  }
]

useHead({
  title: 'Home - Control System Lab UNNC'
})
</script>

<style scoped>
.home-page {
  padding-top: 0;
}

.section--alt {
  background: linear-gradient(180deg, var(--color-bg-alt) 0%, var(--color-bg) 100%);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.section__actions {
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-xl);
}

/* About */
.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.about-text {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.about-stats {
  display: flex;
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-md);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.stat__value {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
}

.stat__label {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.about-visual {
  position: relative;
  height: 400px;
}

.about-shape {
  position: absolute;
  border-radius: var(--radius-xl);
}

.about-shape--1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 10%;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%);
  opacity: 0.3;
}

.about-shape--2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 5%;
  background: var(--color-primary);
  opacity: 0.2;
}

.about-shape--3 {
  width: 120px;
  height: 120px;
  top: 50%;
  right: 30%;
  background: var(--color-secondary);
  opacity: 0.25;
}

/* Research Areas */
.research-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--spacing-xl);
}

.research-card {
  background: var(--color-bg-alt);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  text-align: center;
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.research-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-secondary);
}

.research-card__icon {
  font-size: 3rem;
  display: block;
  margin-bottom: var(--spacing-md);
}

.research-card__title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.research-card__description {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 968px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-visual {
    height: 300px;
  }

  .about-stats {
    flex-wrap: wrap;
    gap: var(--spacing-lg);
  }
}

@media (max-width: 640px) {
  .research-areas {
    grid-template-columns: 1fr;
  }
}
</style>
