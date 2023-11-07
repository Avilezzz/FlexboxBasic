// justiy content
const container_flex = document.getElementById("flebox");
const just_center = document.getElementById("flex-center");
const just_end = document.getElementById("flex-end");
const just_start = document.getElementById("flex-start");
const just_around = document.getElementById("flex-around");
const just_evenly = document.getElementById("flex-evenly");
const just_between = document.getElementById("flex-between");
// aling items

const aling_center = document.getElementById("aling-center");
const aling_end = document.getElementById("aling-end");

// flex-direcction
const flex_column = document.getElementById("flex-col");
const flex_column_reverse = document.getElementById("flex-col-reverse");
const flex_row = document.getElementById("flex-row");
const flex_row_reverse = document.getElementById("flex-row-reverse");

// funcionalidad

just_center.addEventListener("click", (justificarCentro) => {
  container_flex.style.justifyContent = "center";
  justificarCentro();
});

// just. end

just_end.addEventListener("click", (justificarEnd) => {
  container_flex.style.justifyContent = "end";
  justificarEnd();
});

// justficar start

just_start.addEventListener("click", (justificarStart) => {
  container_flex.style.justifyContent = "start";
  justificarStart();
});

// justificar around
just_around.addEventListener("click", (justificarAround) => {
  container_flex.style.justifyContent = "space-around";
  justificarAround();
});

// justificar evenly

just_evenly.addEventListener("click", (justificarEvenly) => {
  container_flex.style.justifyContent = "space-evenly";
  justificarEvenly();
});

// justificar betweeen

just_between.addEventListener("click", (justificarBetween) => {
  container_flex.style.justifyContent = "space-between";
  justificarBetween();
});

// --------------------align---------------------------

aling_center.addEventListener("click", (alignCenter) => {
  container_flex.style.alignItems = "center";
  alignCenter();
});

// align end

aling_end.addEventListener("click", (alignEnd) => {
  container_flex.style.alignItems = "end";
  alignEnd();
});

// FLex column

flex_column.addEventListener("click", (flexColumn) => {
  container_flex.style.flexDirection = "column";
  flexColumn();
});

// flex column reverse

flex_column_reverse.addEventListener("click", (flexColumnReverse) => {
  container_flex.style.flexDirection = "column-reverse";
  flexColumnReverse();
});

// row

flex_row.addEventListener("click", (flexRow) => {
  container_flex.style.flexDirection = "row";
  flexRow();
});
// row reverse

flex_row_reverse.addEventListener("click", (flexRowReverse) => {
  container_flex.style.flexDirection = "row-reverse";
  flexRowReverse();
});
