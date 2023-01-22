<div class="basic-card p1">
{#if $$slots.meta}
 <slot name="meta"></slot>
{/if}
<slot></slot>
{#if $$slots.lowmeta}
<slot name="lowmeta"></slot> 
{/if}
</div>

 
 <style>

   .basic-card {
    display: flex;
    flex-direction: column;
    background-color: var(--grey);
    transition: var(--snap);
    border-radius: 8px;
    height: 100%;
		width: 100%;
overflow: visible;
   }

   .basic-card:hover {
    background-color: #FFFFFF;
    box-shadow: var(--wshadow2);
   }
 
 </style>
