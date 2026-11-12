;; Site commands for the hero REPL on jonramos.dev.
;;
;; Evaluated by Scittle (SCI) in the `user` namespace once the visitor
;; focuses the REPL. The page side lives in src/components/repl/sci.ts
;; and is reached through js/__jrSite.

(defrecord SoftwareEngineer [name since stack base])

(defn software-engineer []
  (->SoftwareEngineer "Jon Ramos" 2016
                      '[Clojure ClojureScript Datomic] "Urnieta"))

(def jon (software-engineer))

(defn skills []
  [:clojure :clojurescript :datomic :re-frame :react :astro
   :typescript :postgresql])

(defn- go! [section]
  (.scroll js/__jrSite (name section))
  section)

;; REPL commands keep short, user-facing names, even though they
;; scroll the page or flip the theme.
(defn experience [] (go! :experience))
(defn projects [] (go! :projects))
(defn contact [] (go! :contact))

(defn theme
  ([] (keyword (.theme js/__jrSite)))
  ([t]
   (when-not (#{:light :dark} t)
     (throw (ex-info "theme expects :light or :dark" {:got t})))
   (keyword (.theme js/__jrSite (name t)))))

(defn help []
  (println ";; This is real Clojure (SCI). Try:")
  (println ";;   (skills)  (projects)  (contact)  (theme :dark)")
  (println ";;   (map inc [1 2 3])")
  (println ";;   (defn sq [x] (* x x)) (sq 12)")
  (println ";;   (frequencies \"txirimiri\")"))

;; Tell the page the commands are loaded: Scittle's eval_script_tags
;; fetches this file asynchronously and offers no completion callback.
(.ready js/__jrSite)
