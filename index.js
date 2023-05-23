#!/usr/bin/env node
import { program } from 'commander';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var stdin = '';

const programAction = (key) => {
    if (stdin) {
        try {
            let data = JSON.parse(stdin)
            const secretString = data[key]
            console.log(secretString)
        }
        catch(e) {

        }
    }
}

program
    .name('secret-to-env')
    .version('0.1.0')
    .description('Convert a plaintext env file stored as an aws secret from stdin to a .env file')
    .argument('[key]', 'key to extract', 'SecretString')
    .showHelpAfterError()
    .action(programAction);

if (process.stdin.isTTY) {
    program.parse(process.argv);
}
else {
    process.stdin.on('readable', function () {
        var chunk = this.read()
        if (chunk !== null) {
            if (!/<Buffer.*>/.test(chunk) && !/^\s*$/.test(chunk)) {
                stdin += chunk
            }
        }
    })

    process.stdin.on('end', function () {
        program.parse(process.argv)
    })
}