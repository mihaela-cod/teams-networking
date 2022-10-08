function $(selector) {
  return document.querySelector(selector);
}

function getTeamHTML(team) {
  return `
  <tr>
    <td>${team.promotion}</td>
    <td>${team.members}</td>
    <td>${team.name}</td>
    <td>
      <a href="${team.url}">open</a>
    </td>
    <td>
      <button class="btn-update" >Update</button>
      <button class="btn-delete" >Delete</button>
    </td>
  </tr>`;
}

function displayTeams(teams) {
  var teamsHTML = teams.map(getTeamHTML);

  // afisare
  $("table tbody").innerHTML = teamsHTML.join("");
}

function loadTeams() {
  fetch("data/teams.json")
    .then(function (r) {
      console.info(r);
      return r.json();
    })
    .then(function (teams) {
      displayTeams(teams);
    });
}

function submitForm(e) {
  e.preventDefault();
  var promotion = $("input[name=promotion]").value;
  var members = $("input[name=members]").value;
  var name = $("input[name=name]").value;
  var url = $("input[name=url]").value;

  var team = {
    promotion: promotion,
    members: members,
    name: name,
    url: url,
  };
  // console.warn("submit", JSON.stringify(team));
  console.warn("adauga in teams.json:", JSON.stringify(team));
}

function initEvents() {
  var form = document.getElementById("editForm");
  // console.info(form);
  form.addEventListener("submit", submitForm);
}

loadTeams();
initEvents();
