<script>
let y = 1
</script>
<svelte:window bind:scrollY={y}/>
<div class="gallery">
  <div class="col" style="transform: translateY({y/5}px)">
    <div class="image">
      <img src="https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="">
    </div>
    <div class="image">
      <img src="https://images.pexels.com/photos/10533885/pexels-photo-10533885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="">
    </div>
    <div class="image">
      <img src="https://images.pexels.com/photos/10253213/pexels-photo-10253213.jpeg?cs=srgb&dl=pexels-beepin-10253213.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="">
    </div>
  </div>
  <div class="col" style="transform: translateY({-y/2}px)">
    <div class="image">
      <img src="https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg?cs=srgb&dl=pexels-%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BF%D0%B0%D1%85%D0%BE%D0%BC%D0%BE%D0%B2-10050979.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="">
    </div>
    <div class="image">
      <img src="https://images.pexels.com/photos/1128660/pexels-photo-1128660.jpeg?cs=srgb&dl=pexels-nur-andi-ravsanjani-gusma-1128660.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="">
    </div>
    <div class="image">
      <img src="https://images.pexels.com/photos/9699293/pexels-photo-9699293.jpeg?cs=srgb&dl=pexels-lada-rezantseva-9699293.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="">
    </div>
  </div>
  <div class="col" style="transform: translateY({y/2}px)">
    <div class="image">

      <img src="https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg?cs=srgb&dl=pexels-daria-sannikova-6405575.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="">
    </div>
    <div class="image">
      <img src="https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg?cs=srgb&dl=pexels-svetlana%F0%9F%8E%9E-10162526.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="">
    </div>
    <div class="image">
      <img src="https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg?cs=srgb&dl=pexels-woodysmedia-4394807.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="">
    </div>
  </div>
</div>

<style>


.gallery {
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
	height: max-content;
	background: white;
  top: 0;
  left: 0;
  overflow: scroll;
}

.col {
  display: flex;
  flex-direction: column;
  width: 100%;
	height: 100%;
  align-self: flex-start;
  justify-self: flex-start;
}


.image {
  width: 100%;
  filter: saturate(0);
  padding: 1rem;
}

.image:hover {
  z-index: 99999999999 !important;
  filter: saturate(1);
}


.image img {
  transition: 0.3s ease-out;
  overflow: hidden;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  width: 100%;
	height: 320px;
}
</style>