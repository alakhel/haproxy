window.addEventListener("load", go);

function go() {
  app.init();
}

app = {
  appRoot: null,
  serversState: {
    "/flatTeamPortal": { response: "none", text: "" },
    "/hapinessAndEntertainement": { response: "none", text: "" },
    "/businessParteners": { response: "none", text: "" },
  },
  init() {
    this.appRoot = document.getElementById("appRoot");
    this.initTable();
  },
  initTable() {
    target = document.getElementById("servers-tables");
    serversStateArr = Object.entries(this.serversState);
    console.log(serversStateArr);
    target.innerHTML = ``;
    serversStateArr.map((v, i) => {
      target.innerHTML += `
                 <tr id="${v[0]}">
                        <td><a href="" title="portal">${v[0].slice(1)}</a>
                        </td>
                        <td>${v[0]}</td>
                        <td>${v[1].text}</td>
                        <td>${v[1].response}</td>
                        <td>
                        <button class="button is-info" onclick="app.getApi('${
                          v[0]
                        }', app.update, '${v[0]}')">
                        Test
                        </button>
                        </td>
                  </tr>
                        `;
    });
  },
  update(data, zone) {
    console.table(data);
    console.log(app.serversState[zone].response);
    app.initTable();
  },
  getApi(url, action, zone) {
    var myHeaders = new Headers();
    const options = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    };
    const uri = `https://srv.lakhel.com${url}`;
    console.log(uri);
    fetch(uri, options, zone)
      .then((response) => {
        console.log(response);
        app.serversState[zone].response = response.status;
        return response.text();
      })
      .then((data) => {
        console.log("response :");
        console.log(data);
        action(data, zone);
      });
  },
};
