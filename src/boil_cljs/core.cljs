(ns ^:figwheel-hooks boil-cljs.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r :refer [atom]]))

;; --------
;; TESTS
;; --------

(println "This text is printed from src/boil_cljs/core.cljs. Go ahead and edit it and see reloading in action.")
(defn multiply [x y] (* x y))

;; ---------
;; DATA
;; ---------

(defonce app-state (r/atom {:player {:health 50
                                     :status 1
                                     :kills 0}
                            :enemy {:health 25}
                            :shoot {:damage 5
                                    :prob 0.8}
                            :bomb {:damage 12
                                   :prob 0.4}}))

;; ---------
;; HANDLERS
;; ---------

(defn set-player-status [arg]
  (swap! app-state assoc-in [:player :status] arg))

(defn attack [mode]
  (let [params (mode @app-state)
        dice (rand)
        damage (:damage params)
        prob (:prob params)]
    (if (< dice prob)
        (swap! app-state update-in [:enemy :health] - damage))))

;; --------
;; VIEW
;; --------

(defn get-app-element []
  (gdom/getElement "app"))

(defn hello-world []
  [:div
   [:input {:type "button"
            :value "Keep Going"
            :on-click #(set-player-status 1)}]
   [:input {:type "button"
            :value "Shoot"
            :onClick #(attack :shoot)}]
   [:input {:type "button"
            :value "Bomb"
            :onClick #(attack :bomb)}]
   [:input {:type "button"
            :value "Retreat"
            :onClick #(set-player-status 0)}]
   [:p "ENEMY HEALTH : " (:health (:enemy @app-state))]
   [:p "PLAYER HEALTH : " (:health (:player @app-state))]
   [:p "KILLS : " (:kills (:player @app-state))]
   (if (= 1 (:status (:player @app-state)))
     [:p "Player Status: Moving Forward!"]
     [:p "Player Status: Scared Shitless!"])])

(defn mount [el]
  (r/render-component [hello-world] el))

;; --------
;; APP INIT
;; --------

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

;; --------
;; HOOKS
;; --------

(defn ^:after-load on-reload []
;;  (mount-app-element)
  (println @app-state))
