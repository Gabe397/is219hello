const parse = require('csv-parse');
const fs = require('fs');

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
                        output.push(record)
                        //Add It to A Model
                    }
                })
                // When we are done, test that the parsed output matched what expected
                .on('end', function(){

                    console.log(output);

                }));

        return output;
}}

module.exports = csvRead;