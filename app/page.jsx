import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Find & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-powered Prompts</span>
      </h1>
      <p className="desc text-center">
          PromptIsland is a platform who looking 
          for AI prompts about CHATGPT, StableDiffusion or etc.
      </p>
      <p className="text-center font-bold">
        #SharingCaring
      </p>
      <Feed />
    </section>
  )
}

export default Home