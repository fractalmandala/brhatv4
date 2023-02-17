<script>
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation, FreeMode, EffectCoverflow } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'
import 'swiper/css/mousewheel'
import 'swiper/css/free-mode'

</script>

<div class="box-flex">
<Swiper
	modules={[Keyboard, Navigation, FreeMode, EffectCoverflow ]}
	keyboard={true}
  loop={true}
	freeMode= {{
    enabled: true,
    sticky: true,
  }}
	effect={'coverflow'}
	coverflowEffect={{
		rotate: 0,
		depth: 0,
		scale: 1,
		modifier: 2
	}}
  slidesPerView={3}
	breakpoints={{
    "576": {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    "768": {
      slidesPerView: 6,
      spaceBetween: 24,
    },
    "900": {
      slidesPerView: 9,
      spaceBetween: 4,
    },
  }}
	navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
	on:slideChange={() => console.log('slide change')}
>
<SwiperSlide>
	<div class="thecolumn c-c-c-c cc civcon" id="b-one">
		<h2>1</h2>
		<h4><a href="/mandala/fractals/civcon">On Indian Civilizational Consciousness</a></h4>
		<p>beginning with a definition of terms</p>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="thecolumn c-c-c-c cc catura" id="b-eight">
		<h2>2</h2>
		<h4><a href="/mandala/fractals/aphorisms">Caturasūtra - 4 Aphorisms</a></h4>
		<p>mental recalibration for a true Indian history</p>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="thecolumn c-c-c-c cc meaning" id="b-nine">
		<h2>3</h2>
		<h4><a href="/mandala/fractals/">Meaning, Instances</a></h4>
		<p>examples of Indian multi-level coherence</p>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="thecolumn c-c-c-c cc macro" id="b-two">
		<h2>4</h2>
		<h4><a href="/mandala/fractals/essay1">The Macrohistoric Case</a></h4>
		<p>for India's civilizational primacy</p>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="thecolumn c-c-c-c cc ratha" id="b-three">
		<h2>5</h2>
		<h4><a href="/mandala/fractals/essay2">Ratha as a Bīja</a></h4>
		<p>the chariot as a fractal in the maṇḍala</p>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="thecolumn c-c-c-c cc ancestors" id="b-four">
			<h2>6</h2>
			<h4><a href="/mandala/fractals/ancestors">Ancestors Outside of Time</a></h4>
			<p>call it what you want, but we have a past</p>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="thecolumn c-c-c-c cc ontic" id="b-five">
			<h2>7</h2>
			<h4><a href="/mandala/fractals/">History is Ontic, Itihāsa is Ontologic</a></h4>
			<p>bhāratīya itihāsa unpacked and explained</p>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="thecolumn c-c-c-c cc synaptic" id="b-six">
			<h2>8</h2>
			<h4><a href="/mandala/fractals/">Synaptic Reconnection</a></h4>
			<p>schema for engagement with civilizational consciousness</p>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="thecolumn c-c-c-c cc rama" id="b-seven">
			<h2>9</h2>
			<h4><a href="/mandala/fractals/">Rāma's Journey</a></h4>
			<p>on the avatāra in you</p>
	</div>
</SwiperSlide>
</Swiper>
</div>

<style>

.thecolumn {
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	width: 100%;
	height: 100%;
}


.civcon {
	background-image: url('/images/mandala/web4.webp');
	background-position: center center;
}

.catura {
	background-image: url('/images/mandala/web1.webp');
}

.macro {
	background-image: url('/images/mandala/web2.webp');
	background-position: center center;
}

.meaning {
	background-image: url('/images/mandala/web3.webp');
	background-position: center center;
}

.ancestors {
	background-image: url('/images/mandala/web5.webp');
	background-position: center center;
}

.ontic {
	background-image: url('/images/mandala/web6.webp');
	background-position: center center;
}

.synaptic {
	background-image: url('/images/mandala/web7.webp');
	background-position: center center;
}

.rama {
	background-image: url('/images/mandala/web8.webp');
	background-position: center center;
}

.ratha {
	background-image: url('/images/mandala/web9.webp');
	background-position: center center;
}
</style>