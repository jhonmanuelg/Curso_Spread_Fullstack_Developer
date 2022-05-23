programa
{
	
	funcao inicio()
	{
		real nota1,nota2,nota3,nota4,media
		cadeia aluno

		escreva("digite o nome do alun: ")
		leia(aluno)

		escreva("digite a nota 1: ")
		leia(nota1)
		
		escreva("digite a nota 2: ")
		leia(nota2)	
		
		escreva("digite a nota3: ")
		leia(nota3)
		
		escreva("disgite a nota4: ")
		leia(nota4)
		
		media = (nota1+nota2+nota3+nota4)/4
		escreva("O aluno: " + aluno + "\n" + "Obteva a media " + media)

               escreva("\n" + "Sua media é: " + media)

	      	se(media>=7){
	      		escreva("\n" + "Voce fue aprobado ")
	      	}

	      	senao{
	      		escreva("\n" + "Infelizmente nao aprovo")
	      	}
	
	
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 639; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */