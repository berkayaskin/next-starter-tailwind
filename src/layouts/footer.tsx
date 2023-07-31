const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a
            href="https://berkayaskin.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            berkayaskin.dev
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
