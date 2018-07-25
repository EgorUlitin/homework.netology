
const Chart = ({ data, colors, labels, series, type }) => {
  const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
  
  return (
    <div className="Charts">
      { data.map((serie, serieIndex) => {
        var sortedSerie = serie.slice(0),
          sum;

        sum = serie.reduce((carry, current) => carry + current, 0);
        sortedSerie.sort(compareNumbers);

        return (
          <div 
            className="Charts--serie `${type}`"
            key={ serieIndex }
            style={{height: 250}}
          >
          <label>{ labels[serieIndex] }</label>
          { serie.map((item, itemIndex) => {
            var color = colors[itemIndex], style,
              size = item / (max) * 100;

            style = {
              backgroundColor: color,
              opacity: item/max + .05,
              zIndex: item,
              height: size + '%'
            };

          return (
            <div
              className="Charts--item"
              style={ style }
              key={ itemIndex }
            >
              <b style={{ color: color }}>{ item }</b>
              </div>
          );
          }) }
          </div>
        );
      }) }
    </div>
  );
};