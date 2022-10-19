// components
import Heading from "./components/Heading"
import Text from "./components/Text"
import { Input } from "./components/Input"

// Icons
import ReactIcon from "./components/Atom"
import { Check, Envelope, Lock } from "phosphor-react"

// Styling
import "./styles/index.css"
import Checkbox from "./components/Checkbox"
import Button from "./components/Button"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 gap-8">
      <header className="flex flex-col items-center">
        <ReactIcon />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-3">
          Faça seu login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-8 gap-4">
        <label
          htmlFor="email"
          className="flex flex-col gap-3"
        >
          <Text className="font-semibold">
            Endereço de e-mail
          </Text>
          <Input.Root>
            <Input.Icon>
              <Envelope />
            </Input.Icon>
            <Input.Body
              id="email"
              type="email"
              variant="primary"
              placeholder="johndoe@example.com"
            />
          </Input.Root>
        </label>

        <label
          htmlFor="password"
          className="flex flex-col gap-3"
        >
          <Text className="font-semibold">Sua senha</Text>
          <Input.Root>
            <Input.Icon>
              <Lock />
            </Input.Icon>
            <Input.Body
              id="password"
              type="password"
              variant="primary"
              placeholder="*************"
            />
          </Input.Root>
        </label>

        <label
          htmlFor="remember"
          className="flex gap-2 items-center"
        >
          <Checkbox children={<Check />} id="remember" />
          <Text size="sm" className="text-gray-200">
            lembrar de mim por 30 dias
          </Text>
        </label>

        <Button
          type="submit"
          className="text-gray-900 font-semibold capitalize mt-4"
        >
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col gap-3 text-center">
        <Text
          asChild
          className="text-gray-400 underline hover:text-gray-200 transition-colors"
          size="sm"
        >
          <a href="#">Esqueceu a sua senha?</a>
        </Text>
        <Text
          asChild
          className="text-gray-400 underline hover:text-gray-200 transition-colors"
          size="sm"
        >
          <a href="#">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}

export default App
