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
  // var teamsHTML = "";
  // for (var i = 0; i < teams.length; i++) {
  //   teamsHTML += getTeamHTML(teams[i]);
  // }

  // transforma in HTML
  // console.warn("display", teams);
  var teamsHTML = "";
  teams.forEach(function (team) {
    // console.info(team.promotion);
    teamsHTML += getTeamHTML(team);
  });

  // afisare
  document.querySelector("table tbody").innerHTML = teamsHTML;
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
loadTeams();
