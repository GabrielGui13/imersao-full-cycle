## Configuração de ambiente do WSL (Windows Subsystem for Linux)
* [Guia Docker para WSL2](https://github.com/codeedu/wsl2-docker-quickstart)
* [Guia para configuração de terminal](https://www.youtube.com/watch?v=Voei5KJaeIA&t=23s)

* Baixar o **Ubuntu** na Microsoft Store
* Baixar o **Windows Terminal** na Microsoft Store
* Baixar o **Windows PowerToys** (não obrigatório)
* Painel de Controle / Programas / Ativar ou desativar recursos do Windows / Subsistema do Windows para Linux
* Ou execute no Windows PowerShell em Modo Administrador
```shell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
* _PARA VSCODE_ > Instalar a extensão "Remote - WSL"
* Para setar a versão do WSL em 2 
```shell 
wsl --set-default-version 2
```
* Instalar o ZSH (dentro do terminal linux)
```zsh
sudo apt-get install zsh
```
* Instalar o Oh-my-zsh
```zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
* Instalar o [Powerline Fonts](https://github.com/powerline/fonts), precisa configurar para Windows Terminal e Visual Studio Code
```zsh
# clone
git clone https://github.com/powerline/fonts.git --depth=1
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts
```
* Instalar a [fonte recomendada](https://github.com/romkatv/powerlevel10k/blob/master/font.md) para o powerlevel10k
* Instalar o [PowerLevel10k Theme](https://github.com/romkatv/powerlevel10k#oh-my-zsh)
```zsh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```
* Editar o arquivo ~/.zshrc no Visual Studio Code
```zsh
code ~/.zshrc
```
* Adicionar/definir tema do PowerLevel10k dentro do arquivo
```zsh
ZSH_THEME="powerlevel10k/powerlevel10k"
```
* _Configuração para usuários de PowerLevel9k_ > [PowerLevel9k Migration](https://github.com/romkatv/powerlevel10k#for-new-users)
* Instalar o [autosuggestions](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md) do zsh dentro de '~/.oh-my-zsh/custom/plugins', encontrada na home/\<usuario>
```zsh
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```
* Adicionar o plugin dentro do ~/.zshrc
```zsh
plugins=( 
    # other plugins...
    zsh-autosuggestions
)
```
* Instalar o [syntax highlighting](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md) do zsh
```zsh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git

echo "source ${(q-)PWD}/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
```
* Ativar o Syntax Highlighting dentro do ~/.zshrc
```zsh
source ./zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```
* Melhorar visualização das pastas (em ~/.p10k.zsh)
```zsh
POWERLEVEL9K_SHORTEN_STRATEGY=truncate_to_last
```
* [Configuração de Ícones](https://dev.to/codingones/a-better-shell-with-oh-my-zsh-1m0h) 
* _Espaço para adicionar link de configuração do PowerLevel10k_