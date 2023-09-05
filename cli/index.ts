import { program } from 'commander'
// @ts-ignore
import Command from './command.ts'
// @ts-ignore
import Log from './log.ts'

console.log(Log.chalk.bgWhite.bold(' Web Template! '))
program
  .command('dev [name]')
  .description('运行对应模板命令')
  .action(Command.run)

program
  .command('build [name]')
  .description('构建对应模板命令')
  .option('-m, --mode', '打包模式，默认production')
  .action(Command.build)

program.configureOutput({
  // 将错误高亮显示
  outputError: str => Log.error(str)
})

program.parse(process.argv)
