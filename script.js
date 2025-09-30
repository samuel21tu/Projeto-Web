		
		// 4
		function toggleParagrafo() {
			const p = document.getElementById('paragrafo2');
			p.style.display = (p.style.display === 'none') ? 'block' : 'none';
		}

		
		// 6
		function verificarPalindromo() {
			const palavra = document.getElementById('palindromoInput').value.trim().toLowerCase();
			const resultado = document.getElementById('palindromoResultado');
			if (!palavra) {
				resultado.textContent = 'Digite uma palavra.';
				return;
			}
			const invertida = palavra.split('').reverse().join('');
			resultado.textContent = (palavra === invertida) ? 'É palíndromo!' : 'Não é palíndromo.';
		}

	
		// 8
		function validarCPF() {
			const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
			const res = document.getElementById('cpfResultado');
			if (cpf.length !== 11 || /^([0-9])\1+$/.test(cpf)) {
				res.textContent = 'CPF inválido.';
				return false;
			}
			let soma = 0, resto;
			for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
			resto = (soma * 10) % 11;
			if (resto === 10 || resto === 11) resto = 0;
			if (resto !== parseInt(cpf.substring(9, 10))) {
				res.textContent = 'CPF inválido.';
				return false;
			}
			soma = 0;
			for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
			resto = (soma * 10) % 11;
			if (resto === 10 || resto === 11) resto = 0;
			if (resto !== parseInt(cpf.substring(10, 11))) {
				res.textContent = 'CPF inválido.';
				return false;
			}
			res.textContent = 'CPF válido!';
			return false;
		}

		

		// 10
		function operacoesNumeros() {
			const n1 = Number(document.getElementById('num1').value);
			const n2 = Number(document.getElementById('num2').value);
			const n3 = Number(document.getElementById('num3').value);
			if (isNaN(n1) || isNaN(n2) || isNaN(n3)) return;
			const soma = n1 + n2 + n3;
			const media = soma / 3;
			const produto = n1 * n2 * n3;
			const maior = Math.max(n1, n2, n3);
			const menor = Math.min(n1, n2, n3);
			document.getElementById('tabelaNumeros').innerHTML = `
				<table>
					<tr><th>Números</th><td>${n1}</td><td>${n2}</td><td>${n3}</td></tr>
					<tr><th>Soma</th><td colspan="3">${soma}</td></tr>
					<tr><th>Média</th><td colspan="3">${media.toFixed(2)}</td></tr>
					<tr><th>Produto</th><td colspan="3">${produto}</td></tr>
					<tr><th>Maior</th><td colspan="3">${maior}</td></tr>
					<tr><th>Menor</th><td colspan="3">${menor}</td></tr>
				</table>
			`;
		}

		