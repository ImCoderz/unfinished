def occ(l):
    dict={}
    for i in l:
        k=0
        for j in l:
            if j==i:
                k=k+1
        dict[i]=k
    return dict
print(occ([1,2,2,2,2,3,3,4,5]))