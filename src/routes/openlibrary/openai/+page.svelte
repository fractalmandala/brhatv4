<script lang="ts">
import { onMount } from 'svelte';
import Form from '$lib/components/globals/Form.svelte'
import { fade } from 'svelte/transition';

let loading = false
let error = ''
let endStream = false
let makeRecommendation = false
let searchResponse = ''
let recommendation = []

$: {
		if (searchResponse) {
			let lastLength = recommendation.length
			let x = searchResponse?.split('\n')
			recommendations = x.map((d, i) => {
				if ((x.length - 1 > i || endStream) && d !== '') {
					const [, title, description] = d.match(/\d\.\s*(.*?):\s*(.*)/)
					return { title, description }
				} else {
					return d
				}
			});
			if (recommendations.length > lastLength) {
				animateScroll.scrollToBottom({ offset: 200, duration: 1500 });
			}
		}
	}

let cinemaType = 'tv'
l

</script>