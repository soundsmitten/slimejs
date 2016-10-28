import chalk = require("chalk");
import { exec, ExecOptions } from "shelljs";

export default function cmd(command: string, options?: ExecOptions): string {
    if (!options || !options.silent) {
        console.log(chalk.blue(command));
    }
    const result: any = exec(command, options);
    if (result.code !== 0) {
        throw new Error(result.stderr);
    }
    console.log(chalk.green("Command success: " + command));
    return result.stdout.trim().replace("\r\n", "\n");
}