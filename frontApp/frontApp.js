window.addEventListener("load", go);

function go() {
  app.init();
}

app = {
  appRoot: null,
  init() {
    this.appRoot = document.getElementById("appRoot");
  },
  update(data, zone) {
    target = document.getElementById(zone);
    target.innerHTML = `<td><a href="" title="portal">Portal</a>
                        </td>
                        <td>/flatTeamPortal</td>
                        <td>${data}</td>
                        <td>reachable</td>
                        <td>
                        <button class="button is-info" onclick="app.getApi('/flatTeamPortal', app.update, 'flatTeamPortal')">
                        Test
                        </button>
                        </td>`;
  },
  getApi(url, action, zone) {
    var myHeaders = new Headers();
    const options = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    };
    fetch(`http://srv.lakhel.com${url}`, options, zone)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        action(data, zone);
      });
  },
};
