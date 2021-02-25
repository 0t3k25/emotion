import type { MutationTree, ActionTree, ActionContext } from "vuex";
import type { Context as AppContext } from "@nuxt/types";
import type { RootState, Person } from "~/types";
import localRandomData from "~/static/random-data.json";

export const state = (): RootState => ({
  people: []
})

export const mutations: MutationTree<RootState> = {
  setPeople(state: RootState, people: Person[]): void {
    state.people = people
  }
}

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit (actionContext: ActionContext<S, R>, appContext: AppContext): void
}

//export const actions: Actions<RootState, RootState> = {

//}
