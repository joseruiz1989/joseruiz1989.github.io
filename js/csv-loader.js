/**
 * csv-loader.js
 * Shared utility: robust CSV parser + data-loader for Jose Ruiz portfolio.
 * Usage: CSVLoader.load('data/projects.csv').then(rows => { ... });
 */

var CSVLoader = (function () {

  /**
   * Parse a CSV string into an array of objects.
   * Handles: quoted fields, commas inside quotes, newlines inside quotes,
   * double-quote escaping (""), HTML inside fields.
   */
  function parseCSV(text) {
    var rows = [];
    var headers = null;
    var lines = splitCSVLines(text);

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (!line) continue;
      var fields = splitCSVRow(line);
      if (!headers) {
        headers = fields;
      } else {
        var obj = {};
        for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = (fields[j] !== undefined) ? fields[j] : '';
        }
        rows.push(obj);
      }
    }
    return rows;
  }

  /** Split raw CSV text into lines, respecting quoted newlines */
  function splitCSVLines(text) {
    var lines = [];
    var current = '';
    var inQuotes = false;
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (ch === '"') {
        if (inQuotes && text[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if ((ch === '\r' || ch === '\n') && !inQuotes) {
        if (ch === '\r' && text[i + 1] === '\n') i++;
        lines.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
    if (current) lines.push(current);
    return lines;
  }

  /** Split a single CSV row into fields, handling quotes */
  function splitCSVRow(row) {
    var fields = [];
    var current = '';
    var inQuotes = false;
    for (var i = 0; i < row.length; i++) {
      var ch = row[i];
      if (ch === '"') {
        if (inQuotes && row[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === ',' && !inQuotes) {
        fields.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
    fields.push(current.trim());
    return fields;
  }

  /**
   * Fetch and parse a CSV file.
   * Returns a Promise that resolves to an array of row objects.
   */
  function load(url) {
    return fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to load ' + url + ': ' + res.status);
        return res.text();
      })
      .then(function (text) {
        return parseCSV(text);
      });
  }

  return { load: load, parseCSV: parseCSV };

})();
