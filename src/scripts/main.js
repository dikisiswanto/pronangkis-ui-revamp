/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Set up the chart
$(document).ready(() => {
  $('table.datatables').DataTable({
    language: {
      url: 'https://cdn.datatables.net/plug-ins/1.10.18/i18n/Indonesian.json',
    },
    dom: 'Bfrtip',
    buttons: [
      'excelHtml5',
      'csvHtml5',
      {
        extend: 'pdfHtml5',
        orientation: 'landscape',
        pageSize: 'A4',
      },
      'print',
      {
        extend: 'colvis',
        columns: ':gt(2)',
      },
    ],
  });

  const chart = new Highcharts.Chart({
    chart: {
      renderTo: 'chart-container',
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25,
      },
    },
    title: {
      text: 'Anggaran Pendapatan dan Belanja  - Kabupaten BANTUL',
    },
    yAxis: {
      min: 0,
      title: { text: 'Nominal (dlm Juta Rupiah)' },
    },
    xAxis: {
      categories: ['2018', '2017'],
    },
    plotOptions: {
      column: {
        depth: 25,
      },
    },
    series: [
      {
        name: 'BELANJA',
        data: [2874747.56, 2161336.56],
      }, {
        name: 'PENDAPATAN',
        data: [2078242.75, 2078242.75],
      }, {
        name: 'PENERIMAAN PEMBIAYAAN DAERAH',
        data: [103203.81, 103203.81],
      }],
  });
});
