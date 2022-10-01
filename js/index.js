function displayTeams(teams) {
  // var teansHTML = "";
  // for (var i = 0; i < teams.length; i++) {
  //   teamsHTML += "<tr><td>TODU</td></tr>";
  // }

  // transforma echipele din json in HTML
  // console.warn("display", teams);
  var teamsHTML = "";
  teams.forEach(function (team) {
    // console.info(team.promotion);
    teamsHTML += `
      <tr>
        <td>${team.promotion}</td>
        <td>${team.members}</td>
        <td>${team.name}</td>
        <td>
          <a href="${team.url}">open</a>
        </td>
        <td>x e</td>
      </tr>`;
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
