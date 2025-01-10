using System;
using System.Threading;
using System.Threading.Tasks;

//приклад вхідних данних
uint[] input = { 8, 0, 14 };
uint targetIndex = 2;


//0 - red
//1 - green
//2 - blue

Task1(input, targetIndex);


int Task1(uint[] array, uint target)
{
    int steps = -1;
    if (target >= array.Length || target < 0)
    {
        Console.WriteLine("Введіть дійсний номер кольору");
        return steps;
    }
    uint? first = null;
    uint? second = null;
    uint? remainer = null;
    uint? smallestNumber = null;

    for (int i = 0; i < input.Length; i++)
    {
        if (i != target)
        {
            if (!first.HasValue)
            {
                first = input[i];
            }
            else if (!second.HasValue)
            {
                second = input[i];
                break;
            }
        }
    }
    if (first.HasValue && second.HasValue)
    {
        remainer = (first >= second) ? (first - second) : (second - first);
        smallestNumber = (first >= second) ? second : first;

        if (remainer % 3 == 0 && (array[target] > 0 || smallestNumber > 0))
        {
            steps = (first >= second) ? (int)first : (int)second;
        }
    }
    Console.WriteLine(steps);
    return steps;
}



