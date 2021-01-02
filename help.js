const help = (prefix) => {
	return `> *comandos do bot de figurinha* <
comando: *${prefix}sticker* or *${prefix}stiker*
descrição : converte uma imagem, gif ou vídeo para figurinha. 
comando : *${prefix}sticker nobg* or *${prefix}stiker nobg*
descrição : converte imagem para figurinha enquanto remove o fundo. 
comando : *${prefix}toimg*
descrição : converte figurinha para imagem.
> *outros comandos* <
comando : *${prefix}tts*
descrição : converte texto para áudio.
*\nexample : *${prefix}tts pt macaco falante*\n
comando: *${prefix}ocr*
descrição : coloca algum texto na imagem.
comando : *${prefix}wait*
descrição : procura um anime com base na imagem.
> *comandos no grupo* <
comando : *${prefix}linkgroup*
descrição : gera o link do grupo.
obs: só pode ser usado quando o bot for adm, e algum adm ter dado o comando!\n
comando : *${prefix}tagall*
desc : gera uma lista de todos os membros do grupo, incluindo adms.
obs: esse comando só pode ser usado por um adm! \n`
}

exports.help = help
