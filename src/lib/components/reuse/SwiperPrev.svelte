<div>
 <img src="/images/socialicons/prevarrow.png" alt="previous" />
</div>

<style>
 div {
   display: flex;
 }
 div img {
   object-fit: contain;
   opacity: 0.3;
   transition: var(--snap);
   transform-origin: center center;
 }

 div:hover img {
   transform: scale(0.9);
   opacity: 1;
 }

@media screen and (min-width: 900px) {
 div, div img {
   width: 28px;
   height: 28px;
 }
}

@media screen and (max-width: 899px) and (min-width: 768px) {
 div, div img {
   width: 24px;
   height: 24px;
 }
}
@media screen and (max-width: 767px) and (min-width: 576px) {
 div, div img {
   width: 24px;
   height: 24px;
 }
}
@media screen and (max-width: 576px) {
 div, div img {
   width: 20px;
   height: 20px;
 }
}
</style>