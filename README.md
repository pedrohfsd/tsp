## Welcome to the Travelling Salesman Problem repository
The goal here is to talk about and share common solutions to this problem, as well as implementing and executing them on random instances. Yes, that's right, nothing is better than plotting the graph and see the magic taking place live ;).

Never heard of the Traveling Salesman Problem? It's ok, just read the [Introduction](https://pedrohfsd.github.io/TSP/intro) page.

### What algorithms will we cover?
Three classes of algorithms will be covered:

**Meta-Heuristic**
- Genetic Algorithm
- [Simulated Annealing](https://pedrohfsd.github.io/TSP/simulated_annealing)

**Heuristic**
- Nearest Neighbour Search
- Twice Around The Tree
- Matching Based
- Adjacent Pairwise
- General Pairwise
- 2-OPT
- 3-OPT

**Exact**
- Integer Programming
- Simple Branch and Bound
- Eastman Branch and Bound
- Branch and Bound over Hungarian Method
- Little et al Branch and Bound

### What's the difference between Exact, Heuristic and Meta-Heuristic algorithms?
Exact algorithms are algorithms that guarantee the optimum solution if you let them finish, the problem is that their time complexity usually belongs to O(n!) or O(2^n). Heuristic and Meta-Heuristic algorithms are algorithms that can't guarantee the optimum solution but they usually guarantee a good solution in polynomial time complexity. The difference between Heuristic and Meta-Heuristic is that Heuristic algorithms are problem dependent, they usually use the problem in their favor and because of this they tend to get stuck at a local optimum instead of converging to the global optimum. Meta-Heuristics on the other hand uses a generalized strategy, they don't know the problem a priority and can't use it in their favor, because of this they tend to get less stuck at local optimum and usually converge better to the global optimum.
