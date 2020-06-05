while True:
    userString = input()
    answer = ''
    for i in range(len(userString)):
        if i%2==0:
            answer += answer.join(userString[i].title())
        else:
            answer += answer.join(userString[i].lower())
    print(answer)
