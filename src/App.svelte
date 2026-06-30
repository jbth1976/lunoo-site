<script>
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import KidsLove from './components/KidsLove.svelte';
  import ParentsLove from './components/ParentsLove.svelte';
  import Characters from './components/Characters.svelte';
  import Collection from './components/Collection.svelte';
  import BookPreview from './components/BookPreview.svelte';
  import Story from './components/Story.svelte';
  import Reviews from './components/Reviews.svelte';
  import HowItWorks from './components/HowItWorks.svelte';
  import Faq from './components/Faq.svelte';
  import FinalCta from './components/FinalCta.svelte';
  import Legal from './components/Legal.svelte';
  import Footer from './components/Footer.svelte';

  let scrolled = false;
  onMount(() => {
    const onScroll = () => { scrolled = (window.scrollY || window.pageYOffset || 0) > 40; };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<Header {scrolled} />
<main>
  <Hero />
  <KidsLove />
  <ParentsLove />
  <Characters />
  <Collection />
  <BookPreview />
  <Story />
  <Reviews />
  <HowItWorks />
  <Faq />
  <FinalCta />
  <Legal />
</main>
<Footer />
