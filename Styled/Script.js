$(document).ready(function () {
  init();

  function init() {
    var url = "https://api.covid19api.com/summary";

    var data = ''

    $.get(url, function (data) {
      data = `
             
             <td>${data.Global.TotalConfirmed}</dt>
             <td>${data.Global.TotalDeaths}</dt>
             <td>${data.Global.TotalRecoved}</dt>
             `;
      $("#data").html(data);
    });
  }
});
