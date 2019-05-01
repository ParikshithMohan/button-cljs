(ns ^:figwheel-hooks boil-cljs.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

(println "This text is printed from src/boil_cljs/core.cljs. Go ahead and edit it and see reloading in action.")

(defonce app-state (atom {:text "Hello world!"}))
(def ene-health (reagent/atom 25))
(def pla-health (reagent/atom 50))
(def random-val (reagent/atom 0))

(defn multiply [x y] (* x y))
(defn get-app-element []
  (gdom/getElement "app"))
(if (< (rand-int 100) 80 ) "yes" "no")
(defn inc-atom [at num] (swap! at + num))
(defn dec-atom [at num] (swap! at - num))
(defn randgen[] (rand-int 100))
(defn randcheck? [number]
  (if (< number 80) (dec-atom ene-health 5)))
(defn hello-world []
  [:div
   "The atom random-val has value: " @random-val
  ;; [:input {:type "button" :value "Click me!"
    ;;        :on-click #(swap! random-val (rand-int 100))}]
   [:input {:type "button" :value "Keep Going"
             :on-click #(swap! random-val randgen[])}]
   [:input {:type "button" :value "Shoot"
            :on-click #(randcheck? (rand-int 100) )}]
   [:input {:type "button" :value "Bomb"
            :on-click #(dec-atom ene-health 10)}]
  ;; [:input {:type "button" :value "Retreat"
  ;;          :on-click #(js/alert "Retreat")}]
   [:p "ENEMY HEALTH : " @ene-health]
   [:p "PLAYER HEALTH : " @pla-health]]
  )
(defn mount [el]
  (reagent/render-component [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
