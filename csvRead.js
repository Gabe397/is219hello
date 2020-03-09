const parse = require('csv-parse');
const fs = require('fs');
const City = require('./Models/City')

class csvRead{
    static read(csvFile) {
        let output = [];

        fs.createReadStream(csvFile)
            .pipe(parse({
                delimiter: ',',
                trim: true,
                skip_empty_lines: true
            })
                .on('readable', function(){
                    let record;
                    while (record = this.read()) {
                        let city = City.create(record);
                        console.log(city);
                        output.push(record)
                    }
                })
                .on('end', function(){
                    //Write Into A SQL.
                }));

        return output;
}}

module.exports = csvRead;