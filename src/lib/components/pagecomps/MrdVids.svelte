<script>
// @ts-nocheck
	
  import supabase from '$lib/db'
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Keyboard, Navigation} from 'swiper'
  import 'swiper/css'
  import 'swiper/css/keyboard'
  import 'swiper/css/navigation';

	async function HindiKavita () {
    const { data, error } = await supabase
    .from('brhat-youtube')
    .select()
    .eq('type','hindi')
    .order('sequence')
    if (error) throw new Error(error.message)
    return data
  }

	async function MrdangaVids () {
    const { data, error } = await supabase
    .from('brhat-youtube')
    .select()
    .eq('type','mrdanga')
    .order('sequence')
    if (error) throw new Error(error.message)
    return data
  }

	async function Shabdavali() {
    const { data, error } = await supabase
    .from('content-shabdavali')
    .select()
    .order('id')
    if (error) throw new Error(error.message)
    return data 
  }

</script>

<div class="flexbox-c full">
	
</div>