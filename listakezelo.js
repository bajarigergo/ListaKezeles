export function tablazatLetrehoz(lista) {
  let txt = `<div class="table-responsive">
  <table class="table table-striped">
  <thead>
  <th>Név</th>
  <th>Kor</th>
  <th>Neme</th>
  <th></th>
  </thead>
  <tbody>`;
  lista.forEach((element, index) => {
    txt += `<tr>
    <td>${element.nev}</td>
    <td>${element.kor}</td>
    <td>${element.nem ? "Férfi" : "Nő"}</td>
    <td><button id="${index}">🗑️</button></td>
    </tr>`;
  });
  txt += `</tbody></table></div>`;
  return txt;
}
export function megjelenit(txt) {
  const ELEM = $(".adatok");
  ELEM.html(txt);
}

