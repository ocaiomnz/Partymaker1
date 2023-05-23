def linha(n):
    print('='*len(n))
    print((n))
    print('='*len(n))


linha('Vamos te ajudar a criar sua festa')

convidados = int(input('Quantas pessoas serão convidadas?'))
while True:
    cerveja = int(input('Quantos convidados bebem cerveja?'))
    if cerveja > convidados:
        print('erro, existem mais bebedores de cerveja que convidados')
    elif cerveja <= convidados:
        break
while True:
    vodka = int(input('Quantos convidados bebem vodka?'))
    if vodka > convidados:
        print('erro, existem mais bebedores de vodka que convidados')
    elif vodka <= convidados:
        break
while True:
    tequila = int(input('Quantos convidados bebem tequila? '))
    if tequila > convidados:
        print('erro, existem mais bebedores de tequila que convidados')
    elif tequila <= convidados:
        break
while True:
    comidas = str(input('As pessoas irão comer na festa?')).upper().strip()[0]
    if comidas == 'S':
        comidas = 1
        break
    elif comidas == 'N':
        comidas = 0
        break
print(f'Considerando que das {convidados} pessoas convidadas, {cerveja} bebem cerveja, {vodka} bebem vodka, {tequila} bebem tequila e')
if comidas == 1:
    print(f'os convidados irão comer, para uma boa festa, calculamos em torno de: ')
elif comidas == 0:
    print(f'os convidados não irão comer, para uma boa festa, calculamos em torno de: ')

qntcerveja = cerveja*6
qntvodka = round(vodka*0.330)
qntsuco = round(qntvodka*5)
qnttequila = round(tequila*0.2)
qntcomida = convidados*11
if comidas == 1:
    linha(f"""
    {qntcerveja} Garrafas de cerveja (330ml)
    {qntvodka} Litros de Vodka
    {qntsuco} Litros de Mistura para Vodka
    {qnttequila} Litros de Tequila
    {qntcomida} Salgadinhos
    """)
elif comidas==0:
    linha(f"""
    {qntcerveja} Garrafas de cerveja (330ml)
    {qntvodka} Litros de Vodka
    {qntsuco} Litros de Mistura para Vodka
    {qnttequila} Litros de Tequila
    """)