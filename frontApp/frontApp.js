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
                        <td>192.168.3.4</td>
                        <td>reachable</td>
                        <td>
                        <button class="button is-info" onclick="app.getApi('/flatTeamPortal', app.update, 'flatTeamPortal')">
                        Test
                        </button>
                        </td>`;
  },
  getApi(url, action, zone) {
    var myHeaders = new Headers();
    myHeaders.set("Origin", "http://127:0:0:2");
    const options = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    };
    fetch(`http://127.0.0.1:3000${url}`, options, zone)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        action(data, zone);
      });
  },
};
