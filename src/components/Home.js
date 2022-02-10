import React from "react";

const Home = (props) => {
    console.log('Home', props)
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper itm">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw0NDQ4PDQ0NDw0NEA4NDQ8QEQ8NFhEWFhURFhUYHSggGB0mGxMTIT0iMSorLzouFyA2RDcsNykuLysBCgoKDg0OFw8QFS0gHx0tLSsrKystKys2LS0rKy0tLS04LS0tLS01LSsrLSs3NystLSstMy0tNy0yNy4rKysrN//AABEIALcBFAMBIgACEQEDEQH/xAAcAAEBAAEFAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA9EAACAgECAwUECQIDCQAAAAABAgADEQQSBSExBhNBUWEicYGRBxQjMkJSscHwYqEzQ4IVJDRTcpKjs9H/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQEBAAMAAAAAAAAAAAAAAAERAiExQf/aAAwDAQACEQMRAD8A9kiIlZJZIgZRLECSSxASTKSBIiICIiAiIgIliBIljECRLiMQJEuIxAkS4jECRLiMQJLGIgIiIFiIgIiSBIxLLmBjiMTLMQEREBJEQLJiIgIiICIiAEsxMogWIiAiIgIiSBYkiBYkiBYiICIiBIliBJYiAiIgSIiAiIgWIiBJYiBJJTJARJECyyTpXbDtsKGOl4fbRZqxuNhY94tOB0wDjPXqcDHOEd1lE8X0X0hcRVzZa6tUoFpW6qlU7npyZVU9T97PnyM9K4B2w0WuRXpvVWZS3d3fZtgZ3EbsbgMHmPKBz8TCm5HGUdXHmjBh8xM4UiAf7cvjECREQEREBERAREQLEkQLEkQLEkQLEkQEREBERAsREBERAhkliBIiIG04vqlposd22jGwEEAhn9leZ9SJ80amsK/PK3UWexdklcDqCvjk8+on0zxUoKL2sXci1WOwxnIVSf2nzZr3w9zqC4yXAXnuGM8oI4zVcTfa6si21Z3km1mBUMDjafHnidh4dpqdVSbaLaqbsAtpjitVUg5UMT0wQB8vLPCLTRcdwUCwc8FcZ+H4ptr6bqVvCKtldo54OO75+R8OcDt2h1Z4Y/1j6yhtworp09hsNtjEcmx0GOv7jIPbe0n0s/Y7NKh0lzITZbcVfu/DbVjk7ep6ZHIzxnSWtXt2nmufAYGeuMzl9PxRGG25Rz5E4BU+8QY5vsX2h1y6q7VaRHZdjvc9ottDruG57FHU8uRJ8MZGZzPEfpC4slz2G6qmsNlKRUCpU/dXaQWJIx4+PIzgKdT3SWPRcaw6hW22uqGsfgZVI5ek6trdeWJ2tnPLfjGAeqqPwj16n+0D6P7B9ta+Jo6MFq1lIzZWjbkdc47xD5Z5EdQSOuQZ2ufLfYPj7aDWaa4Ntr79Vs8jW2Aw+K7viqz6iB8uY8D5jzgZSzHMQMokiBYkiBYiICIiBZIiAiIgIlkgIiIFiIgIiSBCZiTK00nMDItJvmg7TTNkDbdq7SOH68jqNLqP/WZ8zpqWQ9eRPQz6S7RHfotavi2m1A/8bT5i1r4cjyP7wOVqNLuthXZYpyDnkTjHOb3ULW9QSxSCGYmwNyZScr7sZA+E4KuwAZJAHmZgmvZt1dSu+R4dB64gb7VcCtSlNVX9rRZu5p7TJhnX2gOnOt/lOOTn6+6anCdZfprC1dn1cnaT3gYo7KcqGXBz48/f5znLdbp9S3d66ldLqB3H+9aPLqyG3NjsFzvJrbAPtAFBzEK4qkbq9Qh55qLgf1Iyt+gacO56AZJOAAOZJnMmyqjVGkXLqahhO/qHs2K9YzgZPTeRj0mlw2+is1lwwcrzdsMAwYqdvl0hHOcM7NounOpsFeowW3AvYK/yjb7IDEEk/e+E7jwjt/qq1BsuLmvulFT1ixLK1GCFIIZXPM7ixHTkfHz/AIXxdtOdYpdQtwfZ3gDK6lt2FJHLw6ETTbjgenUM/dLc/wBxalKY/wClV5CB9NcF4xTrKlv09iuGVSyq6s1bEZKOB0I6TkMz5o7I6rU6LWVObMsEr7nuLEtDbnXKsUIwu0tkHOMDlnBH0nmBqgy5mkDMgYGpExEsCyyRAsREBERAREQKYERAkRECxEQBklMhgYtNNpqGYmBtrFmiRN2wmk6wNpqad9dqfnrsT5qR+8+ZrOFvdcST3VXLNzq23kOYGBzPpPaO1XbxKt2n0LVvdghr3Yd2h8l67j69Pf4eRcRsvYF2Xci8i9TJYiD12E7B78QNzp9Npwy1pqqwmOe6mxGZvIO3L+03Gp4PbUotUgo/NTnDuMnoATkDHmPDlzE6w7+c1uH8ceh0YYdFOdrjcOYweXh7/ceoEDdajUAErcOfgSB/PjOIGlNlqrQGLsfZCA5yPLHObrXaxr2JNed25wKVbbt6sVHPGAOY6cs8iAZNJWU2ailjuUhhsOG5eR8CP55ANTX8N1AucW1b7aUFthr5b6h/nA+XmcfCbelaGsxqGtSthZhqkV2Ry2RkEjK9enPn0nK8U7QXvZRfXsBq9pAlahWrYAMhAAwpAxj3+M4bUbGclV21uSyp+QEDK59CCIVrDhloRn07LqalVXsFQLd3ksAHRhyPsH4Y6ZxNZdGu5WAA6Hbglf1mxqWytg9NjoTldyOyNtPUZE5YH2hgjAx8oSuzcPqQVd4gXex9og5PI8l58wPT1ntfZ3Wi/SUWqzMCrIWfqWR2rY+7ch+GJ49br9L9S7sbe+OlqqD11Mtp1SE8i2ACm1uufwz2Hs9plp0ejrRdoXT0kgfnZQzH4szH4wjk1MzBmkJmpgagmYmmJmIVkJZJYCIiAiIgIiIFiIgJIiBYiQwEhiYkwKTNNjDNNNmgS65UVndgiKCzMxCqqjqST0E8p7e9skvDafTaytNPjBZRcBd77AuNvoD884GP0q8csfVU8NqfYn2RPMAGw+3ubPI7VAI9efXGOoni5stGj0tP1hshWssdzuw3Nicjav8AMeQdb1yahc2Jttq67qH7xfiDzm+4VwzVXadtdpPtO4J7xaGPfV45529SP5gzluP0UaS9tOr0DUAo7OveKHYp/hMWwAuSefXOMkY5cH9es0l/1zR2Np7UbFiN7LISfuWL0sQ+DfPBxJLoq6zT65e6v2aXVgfZ6pFC1Xn8lyDkrH8wwM+A8eu6itkZkYYZSVI9Zy/abiNOssGpqpGnvcfb1r9xrPzr75tKFF6lD/j1qTWT/moBk1n+oDp7seUqtHh+vsocPU20j4gjyIPIj0PLpNSjVFC2DyfmfRvObEzleFLZbXbpVClbGrdt3VSp5MPXw+PqYGpwWzdaa2K91YHJFhKrvCsV5jzPL/UehII2l/IuNoUq4YKOQAYdAMk4+JnYNNoVpZlPMjxPj+IH44E2fa5axqrK6VPJ2Vsc8tu9lVHUgAqPhCa4+s5x8Jvq+s4+kEEBgQfIgjxx/wDZyFXUQlcomNo8zyH9yf0n0VokK00KfvLTSp94QA/pPnetOSeeeQ8ycj959E6UOKqhac2iusWHlzsCjceXrmBqzNJiqzVVYGSzUEiiZAQoJYlgSIiBZJZICIiBYgRAREQEhiDAxM02MzaabQNJmmizzOwTauYHjP0qVmvjGntPJLkqYH1waz+06t2U1Pda5s9SXX3kB/3xPUfpf4G2o0S6qoZu0LGzkMk0HG/5EK3wM8i4naS9fEaxgXtuYA52alcd4p5DqQHHo3jF9Jnh7xwbUnU0d1UdP3hHOvU0iyq70bHtDPTPPr0M6L2s7I1apb30lB0Wv0K51PDmbIFPXvKW/FWevp6YIOHZbj2NliHkcZGfut4ieh8RuXUVU8So/wCM4f8AaHHW7SdbqT5+yCQPMes43nL4Y47vq/HzjrtLsAIzkeB6jzU+o/nhNoLMYZTgggg+IIne/pV4Mmm1t66cAVkV6hVXp3NinaR6Aq6+5VnUdHw8ltrct9fep/UAeY/tOsuzXVptpWbbZjCW7mB8NwOGA9x/UTluBjZfTt55dUPqGOD+uZq0pnSWKB/g31WL6LYjK4+aVfKcx2H4LZqtWgrAxUrWuzclXkQoJ9SR8j5SpWet4XZqLbUpVmFdau23xwBgZ9fZnTNZ3neubwwuLFnDDDZ8Z9K8L4HTpq2Rfaew7rbSOdj/ALAdAJxnF+xek1ee9QE+eMEeoI6QmvB7W3hHIRQiV1gIAuQqgBj5k4yT4kkzVpbnO+8Y+iS9MvobFuH/ACrGVHHoGPJvjicJpOwHFWsCHQ2Jk4L2WUhAPMnf0+cox4LpG1Go0lKZJa1MgDO1Q+S3yz8p9DqMnM692O7IV6CsZw+oYe3b/favkM/zpjtSKBIItc1AsssCASxEKREQEkskBERAREQKIgRAREQJEskDEzBhNXEhEDbMs0bK8zeFZgywOLup5EEblIIIPMEHqDPBe2fZ3/Zepddm7hmvYBH25NDZzgEdGTqB+JRPoh65xPGeE1amp6L0FlVgwysPkR5GB826e6zR2A/fqtUOpH3bKjzDDyPMe7OJ6D2S7UKCu2xSDyNbkBseIwevwzOC7XdmLuFhgFOp4c7bgGzmlj+IH8B9fHAznGZ11NDU+X0mqUYyxqvY02rjw5ZV/hJYl5luu49qtHWdRV3bKKjRVo6qScsK61JVsk5YbjknHWda2ezpGH+VfbR/oasuo+C7ZvuE6RKHN+ruS23bZXVUthd9+3kT5KNxPLPSc72d7JW6pEdvsqXta42HGdvdLUNo8Sdr+nPPPoXMyNWuH7L8Ct1veaegbVZ6jZcw9iqpdxOfMk7cD3+GZ7DwLg1GhpFOnXl1d2+/Y/5mP7dBLw/RVaapaNOgrrTkAOpPiSfEnzm9qQmaYZhiZuaq5aaZuq65BEWaqpMlWZAQoomoJiJkIVZZJYFESSwEREBERASREBERACWSUQEREBERASSyQBmJEykgabLNJqszcmTEI47UaFXUq6hlYYIYAgj1E6Hxj6KNDc5etW05Jye6I2/9pyB8MT02YGB5zwr6LdLRgndaeRwSFGB4EAcxO2roCoAAwB0xynMYkxBjjE0PnN0mmAm5xLiDGmtc1AsuJRAYlxEoEKYliICIiBYgRAREQEREBERAREQEoklEBERAREQBiIgSSWIEkliBiZMTIxAxjEuIxAmIxMoMCRKJcQJLEQERECSxEBLEQEREBERAREQEREBKIiAiIgIiICIiAkiICJIgXEkRAuIkiAjERAREQEREBERASyRAREQEsRAREQEREBERA//Z" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Nikkon Camera
                    </span>
                    <span>
                        Price $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button className="btn2"
                        onClick={() => props.addToCartHandler({
                            price:1000,
                            name:'Nikkon Camera'
                        })
                    }>
                        Add Cart
                    </button>
                    <button  className="btn1"
                        onClick={() => props.RemoveToCartHandler()
                    }>
                        Remove Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;