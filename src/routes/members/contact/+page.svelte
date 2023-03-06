<div class="container">
  <div class="intro">
    <div class="h1"></div>
    <div class="col3"></div>
  </div>
  <div class="sec2">
    <div class="h6"></div>
    <div class="col3-2"></div>
    <div class="h6-2"></div>
  </div>
  <div class="sec3">
    <div class="h6-3"></div>
    <div class="col3-3"></div>
  </div>
  <div class="sec4">
    <div class="h6-4"></div>
    <div class="posts"></div>
  </div>
  <div class="sec5">
    <div class="h6-5"></div>
    <div class="books"></div>
  </div>
</div>

<style>
.container {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "intro"
    "sec2"
    "sec3"
    "sec4"
    "sec5";
}

.intro {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.2fr 0.8fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "h1"
    "col3";
  grid-area: intro;
}

.h1 { grid-area: h1; }

.col3 {  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . .";
  grid-area: col3;
}

.sec2 {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "h6"
    "col3-2"
    "h6-2";
  grid-area: sec2;
}

.h6 { grid-area: h6; }

.col3-2 {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . .";
  grid-area: col3-2;
}

.h6-2 { grid-area: h6-2; }

.sec3 {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.8fr 1.3fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "h6-3"
    "col3-3";
  grid-area: sec3;
}

.h6-3 { grid-area: h6-3; }

.col3-3 {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . .";
  grid-area: col3-3;
}

.sec4 {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.6fr 1.2fr 1.2fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "h6-4"
    "posts"
    "posts";
  grid-area: sec4;
}

.h6-4 { grid-area: h6-4; }

.posts {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    ". . .";
  grid-area: posts;
}

.sec5 {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.7fr 1.3fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "h6-5"
    "books"
    "books";
  grid-area: sec5;
}

.h6-5 { grid-area: h6-5; }

.books {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    ". . .";
  grid-area: books;
}

</style>