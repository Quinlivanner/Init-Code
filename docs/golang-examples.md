# Golang Simple example

Golang 精炼功能代码片段

## 📤 使用域名邮箱发送邮件

不仅限于域名邮箱，只要是能够访问到邮件服务器都可。

**Code**

```go{4}
package main

import (
	"gopkg.in/gomail.v2"
)

func main() {
	m := gomail.NewMessage()
	m.SetHeader("From", m.FormatAddress("发送邮箱邮箱号", "邮件显示名字"))
	m.SetHeader("Subject", "主题名字")
	m.SetHeader("To", "目标邮件地址")
	m.SetBody("text/html", "邮件正文Html代码")
	d := gomail.NewDialer("邮件服务器地址", 465, "发送邮箱邮箱号", "邮箱密码")
	d.DialAndSend(m)
}
```

::: details
This is a details block.
:::

## 🤖 Discord 机器人初始化

Discord Bot Init

**Code**

```go{4,5,6,7,8}
package main

import (
	"fmt"
	"github.com/bwmarrin/discordgo"
	"os"
	"os/signal"
	"syscall"
)

func main() {
	DiscordBotInit()
}
func DiscordBotInit() {
	dc, err := discordgo.New("Bot " + "BotToken")
	if err != nil {
		fmt.Println("error creating Discord session,", err)
		return
	}
	dc.AddHandler(ListenGuildMessage)
	dc.Identify.Intents = discordgo.IntentsGuildMessages
	err = dc.Open()
	if err != nil {
		fmt.Println("error opening connection,", err)
		return
	}
	fmt.Println("Bot is now running.  Press CTRL-C to exit.")
	sc := make(chan os.Signal, 1)
	signal.Notify(sc, syscall.SIGINT, syscall.SIGTERM, os.Interrupt, os.Kill)
	<-sc
	dc.Close()
}
func ListenGuildMessage(s *discordgo.Session, m *discordgo.MessageCreate) {
	if m.Author.Bot {
		return
	}
}

```


## 🤖 Kook 机器人初始化

Kook Bot Init

**Code**

```go{4,5,6,7,8,9,10}
package main

import (
	"fmt"
	"github.com/lonelyevil/kook"
	"github.com/lonelyevil/kook/log_adapter/plog"
	"github.com/phuslu/log"
	"os"
	"os/signal"
	"syscall"
)

func main() {
	KookBotInit()
}
func KookBotInit() {
	l := log.Logger{
		Level:  log.FatalLevel,
		Writer: &log.ConsoleWriter{},
	}
	s1 := kook.New("机器人Token", plog.NewLogger(&l))
	s1.AddHandler(GuildMessage)
	s1.Open()
	fmt.Println("Bot is now running.  Press CTRL-C to exit.")
	sc := make(chan os.Signal, 1)
	signal.Notify(sc, os.Interrupt, syscall.SIGTERM)
	<-sc
	s1.Close()
}
func GuildMessage(k *kook.KmarkdownMessageContext) {
	if k.Extra.Author.Bot {
		return
	}
}

```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
